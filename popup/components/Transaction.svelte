<script lang="ts">
  import { fromDecimals } from 'popup/filters/units';
  import { convertRate } from 'popup/filters/convert-rate';
  import { formatNumber } from 'popup/filters/n-format';

  import rateStore from 'popup/store/rate';
	import currencyStore from 'popup/store/currency';

  export let tx;
  export let loading = false;

</script>

<div
  class="card"
  class:success={true}
>
  <div>
    <h3>
     {tx.domain}
    </h3>
    <p>
     {tx.title}
    </p>
  </div>
  <div>
    <h3>
<svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 icon_block"
        >
          <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" />
</svg>


    </h3>
    <p>
     delete
    </p>
  </div>
</div>

<style lang="scss">
  @import "../styles/mixins";
  .icon_block {
    font-size: 16px;
    width: 25px;
  }
  div.card {
    cursor: pointer;

    min-width: 290px;
    background-color: var(--card-color);
    border-left: solid 5px var(--secondary-color);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

    @include flex-between-row;
    @include border-radius(8px);

    &.success {
      border-left: solid 5px var(--success-color);
    }
    &.error {
      border-left: solid 5px var(--danger-color);
    }
    &.loading {
      @include loading-gradient(var(--background-color), var(--card-color));
    }
    & > div {
      padding-left: 10px;
      padding-right: 10px;

      &:last-child {
        text-align: right;
      }
      & > h3 {
        font-size: 10pt;
        margin-block-end: 0;
      }
      & > p {
        font-size: 8pt;
      }
    }
  }
</style>
