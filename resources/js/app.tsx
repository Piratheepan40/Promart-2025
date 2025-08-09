import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

/** Ensure html has correct light/dark before we create the theme */
initializeTheme();

const getMode = () =>
  document.documentElement.classList.contains('dark') ? 'dark' : 'light';

createInertiaApp({
  title: (title) => (title ? `${title} - ${appName}` : appName),
  resolve: (name) =>
    resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
  setup({ el, App, props }) {
    const root = createRoot(el);

    // create theme based on current mode
    const theme = createTheme({
      palette: { mode: getMode() },
    });

    root.render(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App {...props} />
      </ThemeProvider>
    );
  },
  progress: { color: '#4B5563' },
});
