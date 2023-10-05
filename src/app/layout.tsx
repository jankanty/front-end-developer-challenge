import './layout.css';

import { Metadata } from 'next'



interface LayoutProps {
  children: React.ReactNode
}



export const metadata: Metadata = {
  title: 'TitanStar Legends',
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html>
      <body>{ children }</body>
    </html>
  );
};



export default Layout;
