
<!---------------------------------------------------------->
<!--------------- ⬇⬇⬇ SCRIPT  영역 ⬇⬇⬇ ------------------>
<script>
  import "tailwindcss/tailwind.css";

  export let data;

  import Nav from "$lib/components/nav.svelte"
  import Footer from "$lib/components/footer.svelte"

</script>


<!---------------------------------------------------------->
<!------------------ ⬇⬇⬇ HTML 영역 ⬇⬇⬇ ------------------>
<div class="fixed-nav">
  <Nav avatar = {data.props.user.avatar} name = {data.props.user.name} loggedIn = {data.props.loggedIn}/>
</div>

<!-- 네비게이션 바의 높이 만큼 padding-top 추가 -->
<div class="pt-20 px-10 pb-10 max-w-5xl mx-auto">

  <slot />

  <Footer />

</div>

<!---------------------------------------------------------->
<!--------------- ⬇⬇⬇ STYLE 영역 ⬇⬇⬇ -------------------->


<style>
  .fixed-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }
</style>