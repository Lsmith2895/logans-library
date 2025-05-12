# Logan's Library 📚

Logan's Library is a React + TypeScript + VITE application that allows users to search for books by ISBN using the Google Books API. It features both a raw JSON view and a styled library view.

---

## 🧰 Tech Stack

- **React 19**
- **TypeScript**
- **Vite** (for fast dev builds)
- **Tailwind CSS**
- **React Router DOM v7**
- **Axios**
- **Jest** + **React Testing Library** for unit tests
- **ESLint** + **Prettier** for linting & formatting

---

## 🚀 Getting Started

### 1. **Clone the repository**

```bash
git clone https://github.com/your-username/logans-library.git
cd logans-library
```

### 2. **Install dependencies**

```bash
npm install
```

### 3. **Set up environment variables**

Create a `.env` file in the root:

```env
VITE_GOOGLE_BOOKS_API_KEY=your_api_key_here
```

You can get a key from [Google Books API](https://developers.google.com/books/docs/v1/using#APIKey).

### 4. **Startup th dev server**

```bash
npm run dev
```
The App should automatically open with this command!
---

## 💻 Requirements

- **Node.js** 18+
- **npm** 9+ or **pnpm**
- Internet access for API requests

---

## 📦 Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |
| `npm run format`  | Format with Prettier     |
| `npm run test`    | Run Jest unit tests      |

---

## 🧪 Testing

Tests are written using:

- `@testing-library/react`
- `jest`
- `axios-mock-adapter` (for mocking Google Books API)

Run tests with:

```bash
npm run test
```

---

## 🤝 Contributing

1. Fork this repo
2. Create a new branch (`git checkout -b feature-branch`)
3. Make changes and commit
4. Lint and Format
5. Open a pull request and fill out the description to let us know the changes you made

---

## 📄 License

MIT — free for personal or commercial use.
