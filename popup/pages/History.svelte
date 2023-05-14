<script lang="ts">
	import { push } from 'svelte-spa-router';
	import { _ } from 'popup/i18n';
  import { fly } from 'svelte/transition';
	import flyTransition from 'popup/transitions/fly';

  import { clearAllTxns } from 'popup/backend/transactions';
  import { getLatestBlockNumber } from 'app/backend/netwrok';

  import transactionsStore from 'popup/store/transactions';

	import BottomTabs from '../components/BottomTabs.svelte';
	import TopBar from '../components/TopBar.svelte';
	import Transaction from '../components/Transaction.svelte';
  import Modal from '../components/Modal.svelte';
  import TransactionModal from '../modals/Transaction.svelte';

  let loading = false;
  let showTx = null;

  const transactions = [{
    "domain": "google.com",
    "title": "google pixel 6a - Google Search"
  },
  {
    "domain": "youtube.com",
    "title": "Antler India Fellowship | for the next generation of student founders - Youtube"
  },
  {
    "domain": "facebook.com",
    "title": "MathBotTutor | Facebook"
  },
  {
    "domain": "heroicons.com",
    "title": "Heroicons"
  },
  {
    "domain": "youtube.com",
    "title": "Japanese Students Vs Office Culture II Hindi II Rom Rom Ji"
  }
  ]
</script>

<Modal
  show={Boolean(showTx)}
  title={$_('history.modals.details.title')}
  on:close={() => showTx = null}
>
  <TransactionModal tx={showTx}/>
</Modal>
<section>
	<TopBar
    refresh
    lock
    
  />
	<main>
    <div class="header">
      <h2>
        {$_('history.title')}
      </h2>
     
    </div>
   
    <div class="list">
      
        
        <ul>
                {#each transactions as tx}

            <li  in:fly={{
                delay: 100 * 1,
                duration: 400,
                y: -20
              }}>
              <Transaction tx={tx}
                
              />
              
            </li>
            {/each}
          
        </ul>
      
 
    </div>
	</main>
	<BottomTabs />
</section>

<style lang="scss">
	@import "../styles/mixins";
	main {
		height: calc(100vh - 86px);
    max-width: 500px;
    width: calc(100vw - 15px);
		@include flex-center-top-column;
	}
  div.header {
    width: 100%;
    @include flex-between-row;

    & > h3 {
      cursor: pointer;

      &:hover {
        color: var(--primary-color);
      }
    }
  }
  div.list {
    overflow-y: scroll;
  }
  ul {
    margin: 0;
    padding: 0;

    & > li {
      margin: 10px;
    }
  }
  section {
		background-color: var(--background-color);
		@include flex-center-top-column;
	}
  h2,
  h3 {
    margin-block-end: 0;
  }
  h3 {
    font-size: 12pt;
  }
  h2 {
    text-align: left;
    font-size: 20pt;
  }
 
</style>
