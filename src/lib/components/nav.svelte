<script>

  export let avatar;
  export let name;
  export let loggedIn;

  

</script>

<div class="navbar bg-base-100 shadow mb-8">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl" href = "/">Home</a>
  </div>
  <div class="flex-none">

    <ul class="menu menu-horizontal px-1">

      {#if loggedIn['result'] === "success"}
        <li><p>{name}님 반갑습니다.</p></li>
        {#if loggedIn['user']['authority'] === "관리자"}
          <li><a href = "/회원정보관리">회원정보관리</a></li>
       {/if}
        <li><a href = "/테스트">테스트</a></li>
        <li>
          <form method="POST" action="/logout">
            <button>로그아웃</button>
          </form>
        </li>
      {:else}
        <li><a href = "/login">로그인</a></li>
      {/if}
      

    </ul>
  </div>
</div>
