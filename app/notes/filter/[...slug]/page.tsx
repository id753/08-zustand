// C:\Users\Admin\Desktop\project_new\homework\07-routing-nextjs\app\notes\filter\[...slug]\page.tsx

// import NoteList from "@/components/NoteList/NoteList";
// import Pagination from "@/components/Pagination/Pagination";
// import { fetchNotes } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NotesClient from "./Notes.client";
import { fetchNotes } from "@/lib/api";

type Props = {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ page?: string }>;
};

export default async function NotesByCategory({ params }: Props) {
  const { slug } = await params;
  const queryClient = new QueryClient();
  let actualValue;

  if (slug[0] === "filter") {
    actualValue = slug[1]; // Берем то, что после /filter/
  } else {
    actualValue = slug[0]; // Если слова filter нет, берем первый сегмент
  }

  // 2. Теперь решаем, что отправить в API как тег
  let tag;

  if (actualValue === "all" || !actualValue) {
    tag = undefined; // Для API это означает "показать все"
  } else {
    tag = actualValue; // Иначе используем найденное слово как тег
  }

  // const currentPage = Number(pageParam) || 1;
  // const response = await fetchNotes(currentPage, "", tag);
  await queryClient.prefetchQuery({
    queryKey: ["notes", 1, "", tag], // додаємо tag у ключ, щоб дані були специфічні для категорії
    queryFn: () => fetchNotes(1, "", tag),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient initialTag={tag} />
    </HydrationBoundary>

    // <NotesClient initialTag={tag} />
  );
}

/*
удален файл
\app\notes\page.tsx

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NotesClient from "./filter/[...slug]/Notes.client";

export default async function NotesPage() {
  const queryClient = new QueryClient();

  // Делаем prefetch начальных данных (1 страница, пустой поиск)
  await queryClient.prefetchQuery({
    queryKey: ["notes", 1, ""],
    queryFn: () => fetchNotes(1, ""),
  });

  return (
    // Оборачиваем в HydrationBoundary, чтобы клиент увидел данные из queryClient
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
  );
}
 */
