<script lang="ts">
  import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';
	import { _ } from 'popup/i18n';
	import flyTransition from 'popup/transitions/fly';
	import walletStore from 'popup/store/wallet';
  import { trim } from 'popup/filters/trim';

	import AccountCard from '../components/AccountCard.svelte';
	import SearchBox from '../components/SearchBox.svelte';

  const dispatch = createEventDispatcher();

  export let list = [];
  export let index = 0;

	let search = '';

	$: identities = list.filter(
		(acc) => String(acc.name).toLowerCase().includes(String(search).toLowerCase())
	);
	$: selectedAccount = list[index];

	const onSelectAccount = async (account) => {
		const index = list.findIndex(
			(a) => a.base16 === account.base16
		);
		dispatch('selected', index);
	};
	const onInputSearch = (e) => {
		search = e.detail;
	};
</script>

<SearchBox
	placeholder={$_('accounts.placeholder')}
	focus
	on:input={onInputSearch}
/>
{#if identities.length === 0}
	<p>
		{$_('accounts.no_accounts')} {search}
	</p>
{/if}
<ul>
	{#each identities as account, index}
		<li
			in:fly={{
				delay: 50 * index,
				duration: 400,
				y: -20
			}}
			on:click={() => onSelectAccount(account)}
		>
			<AccountCard
				account={account}
				selected={account.base16 === selectedAccount.base16}
			/>
		</li>
	{/each}
</ul>

<style lang="scss">
	@import "../styles/mixins";
	ul {
		padding: 0;
    margin: 0;
    overflow-y: scroll;
		padding-block-end: 70px;

		max-width: 390px;
		width: 100%;
    min-height: 530px;

		& > li {
			cursor: pointer;
			margin: 10px;
			background-color: var(--card-color);
			border-radius: 8px;
			border: solid 1px var(--card-color);

			padding-left: 10px;
			padding-right: 10px;

			@include flex-between-row;

			&:hover {
				border: solid 1px var(--primary-color);
			}
		}
	}
</style>
