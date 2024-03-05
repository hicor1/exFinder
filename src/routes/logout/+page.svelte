<!---------------------------------------------------------->
<!--------------- ⬇⬇⬇ SCRIPT  영역 ⬇⬇⬇ ------------------>

<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
  
    onMount(() => {
      const { query } = $page;
      if (query.get('logout')) {
        alert('로그아웃되었습니다.');
      }
    });
</script>
  