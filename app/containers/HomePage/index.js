import React from 'react';
import Layout from 'components/Layout'
import Table from 'components/Table'

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="main">
        <dt>Medicos</dt>
        <dt>Sair</dt>
      </div>
      <div className="bottom">
        <dt>Exit</dt>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <Layout>
      <SideBar/>
      <Table/>
    </Layout>
  );
}
