This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
## Продовжено роботу над проєктом NoteHub, зосередившись на опрацюваннi SEO та збереженнi «чернетки» (draft) за допомогою Zustand.
Попереднiй https://github.com/id753/07-routing-nextjs </br>
...................................................................................... </br>
Опрацювання SEO </br>
Покращенно видимість застосунку в пошукових системах, налаштувавши SEO-метаінформацію для всіх сторінок проєкту NoteHub. </br>
Meta теги та Open Graph для кожної сторінки </br>
Підключення шрифта Roboto </br>
Створення однієї нотатки та збереження чернетки. Перенесено логіку створення нової нотатки із модального вікна на окремий маршрут. </br>

Збереження draft нотатки у процесі її створення. Доповнено функціонал створення нотатки так, щоб під час заповнення полів форми в компоненті NoteForm.tsx автоматично зберігалася «чернетка» (draft) за допомогою Zustand.</br>
Реалізовано збереження чернетки нотатки в localStorage за допомогою middleware persist з пакету zustand/middleware. Це дозволить зберігати стан draft навіть після перезавантаження сторінки. </br>
...................................................................................... </br>
Розгорнуто на Vercel. </br>
Проєкт створено за допомогою Next.js (App Router). </br>
Усі компоненти, які не прив'язані безпосередньо до маршруту та їх частин, зберігаються в папці components, кожен — у власній папці. </br>
Загальні типи та інтерфейси винесені до файлу types/note.ts. </br>
Функції роботи з API винесені в lib/api/ у вигляді окремих модулів. </br>
Для HTTP-запитів використовується бібліотека axios. </br>
Стан запитів у CSR-компонентах керується через TanStack Query (React Query). </br>
Усі компоненти типізовані з використанням TypeScript. </br>
Код відформатований за допомогою Prettier. </br>
Стилізація — за допомогою CSS Modules. </br>
У проєкті реалізована підтримка SSR та CSR відповідно до завдання. </br>
...................................................................................... </br>
## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
