import { JSX } from 'react';

import { HeaderComponent } from './components/header-component/HeaderComponent';

export function App(): JSX.Element {
  return (
    <div className='flex justify-center min-h-screen bg-gradient-to-br from-blue-100'>
      <HeaderComponent />
    </div>
  );
}

export default App;