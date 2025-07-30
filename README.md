# Currency Converter

A modern, responsive currency converter web app built with React and Tailwind CSS. Instantly convert between currencies with live rates and a beautiful video background.

## Features

- Real-time currency conversion using a public API
- Video background for an engaging user experience
- Responsive and mobile-friendly design
- Swap currencies with one click
- Clean, modern interface

## Live Demo

[https://currency-converter-ps.vercel.app/](https://currency-converter-ps.vercel.app/)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/currency-converter.git
   cd currency-converter
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running Locally

```sh
npm run dev
```
Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

- `src/components/background.jsx` — Video background and heading
- `src/hooks/useCurrencyInfo.js` — Custom hook for fetching currency rates
- `src/App.jsx` — Main application logic and UI

## API Used

- [Fawaz Ahmed Currency API](https://github.com/fawazahmed0/currency-api)

## Customization

- To change the background video, replace `src/assets/bgImage.mp4` with your own video file.

## License

This project is licensed under the MIT License.

---

*Made with ❤️ using React and Tailwind CSS*