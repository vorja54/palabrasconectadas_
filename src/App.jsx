import ErrorBoundary from './components/ErrorBoundary';
import ConnectionsGame from './components/ConnectionsGame';
import UpdateBanner from './components/UpdateBanner';
import PushSubscribe from './components/PushSubscribe';
import InstallPrompt from './components/InstallPrompt';

function App() {
  return (
    <ErrorBoundary>
      <ConnectionsGame />
      <UpdateBanner />
      <PushSubscribe />
      <InstallPrompt />
    </ErrorBoundary>
  );
}

export default App;