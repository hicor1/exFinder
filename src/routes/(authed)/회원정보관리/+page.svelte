<script>
  import Table_allaccount from '$lib/components/table_allaccount.svelte';
  /** @type {import('./$types').PageData} */
  export let data;
  let path = window.location.pathname; // 현재 경로를 가져옵니다.
</script>

<style>
  .center-button {
    display: flex;
    justify-content: center;
    margin-bottom: 1em; /* Optional: Adds some space below the button */
  }
</style>


<div class="center-button">
  <a href = "{path}/회원가입"><button class="btn btn-active btn-primary">신규회원가입</button></a>
</div>


<Table_allaccount data = {data} path = {path} />
