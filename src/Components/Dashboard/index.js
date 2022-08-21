import React from 'react';
import "./index.scss";

export default function Dashboard() {

  return (
    <div className='component__dashboard'>
      <div className='component__dashboard__left'>
        <div className='component__dashboard__left__head'>
          <div>
            <h1>Pozdrav, rootAdmin !</h1>
            <p>Dobrodošao nazad</p>
          </div>
          <div id='dashboard-searchbar'>
            <img src='images/search.svg' />
            <input type='text' placeholder='Pretražuj bilo šta ovde...' />
          </div>
        </div>
        <div className='component__dashboard__left__stats'>
          <div>
            <h3>7450</h3>
            <p>Na stanju artikala</p>
          </div>
          <div>
            <h3>14201</h3>
            <p>Prodano artikala</p>
          </div>
          <div>
            <h3>21000 KM</h3>
            <p>Promet</p>
          </div>
        </div>
        <div className='component__dashboard__left__lager'>
          <div>
            <h3>Naziv artikla: Čarape</h3>
            <p>Na stanju: 1500</p>
            <p>Prodano: 590</p>
            <p>Promet: 1200 KM</p>
          </div>
          <div>
            <h3>Naziv artikla: Majice</h3>
            <p>Na stanju: 1500</p>
            <p>Prodano: 590</p>
            <p>Promet: 1200 KM</p>
          </div>
          <div>
            <h3>Naziv artikla: Gaće</h3>
            <p>Na stanju: 1500</p>
            <p>Prodano: 590</p>
            <p>Promet: 1200 KM</p>
          </div>
          <div>
            <h3>Naziv artikla: Potkošulje</h3>
            <p>Na stanju: 1500</p>
            <p>Prodano: 590</p>
            <p>Promet: 1200 KM</p>
          </div>
          <div>
            <h3>Naziv artikla: Potkošulje</h3>
            <p>Na stanju: 1500</p>
            <p>Prodano: 590</p>
            <p>Promet: 1200 KM</p>
          </div>
          <div>
            <h3>Naziv artikla: Potkošulje</h3>
            <p>Na stanju: 1500</p>
            <p>Prodano: 590</p>
            <p>Promet: 1200 KM</p>
          </div>
          <div>
            <h3>Naziv artikla: Potkošulje</h3>
            <p>Na stanju: 1500</p>
            <p>Prodano: 590</p>
            <p>Promet: 1200 KM</p>
          </div>
          <div>
            <h3>Naziv artikla: Potkošulje</h3>
            <p>Na stanju: 1500</p>
            <p>Prodano: 590</p>
            <p>Promet: 1200 KM</p>
          </div>
          <div>
            <h3>Naziv artikla: Potkošulje</h3>
            <p>Na stanju: 1500</p>
            <p>Prodano: 590</p>
            <p>Promet: 1200 KM</p>
          </div>
          <div>
            <h3>Naziv artikla: Potkošulje</h3>
            <p>Na stanju: 1500</p>
            <p>Prodano: 590</p>
            <p>Promet: 1200 KM</p>
          </div>
        </div>
      </div>
      <div className='component__dashboard__right'>

      </div>
    </div>
  )
}
