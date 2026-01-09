
import React, { useState, useEffect } from 'react';
import Landing from './components/Landing';
import Manual from './components/Manual';
import QuickGuide from './components/QuickGuide';

export enum View {
  HOME = 'home',
  MANUAL = 'manual',
  GUIDE = 'guide'
}

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);

  // Handle hash-based navigation if needed, or stick to state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (Object.values(View).includes(hash as View)) {
        setCurrentView(hash as View);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (view: View) => {
    window.location.hash = view;
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen">
      {currentView === View.HOME && <Landing onNavigate={navigate} />}
      {currentView === View.MANUAL && <Manual onNavigate={navigate} />}
      {currentView === View.GUIDE && <QuickGuide onNavigate={navigate} />}
    </div>
  );
};

export default App;
