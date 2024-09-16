<!---------------------------------------------------------->
<!--------------- ⬇⬇⬇ SCRIPT  영역 ⬇⬇⬇ ------------------>

<script>
    //form 저장결과 리턴받기
    export let form;
    import { onMount } from 'svelte';
    import { push } from 'svelte-spa-router';

    onMount(() => {
        if (form && form.result === "success") {
            alert(`${form.user_name}님 로그인 되었습니다.`);
        } 
        if (form && form.result === "failure") {
            alert(`아이디 또는 패스워드가 일치하지 않습니다`);
        } 
    });
</script>

<!---------------------------------------------------------->
<!--------------- ⬇⬇⬇ HTML    영역 ⬇⬇⬇ ------------------>
<div class="min-h-screen flex justify-center bg-gray-50 pt-12 sm:pt-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          로그인
        </h2>
      </div>
      <!--원하는 액션을지정해야함-->
      <form class="mt-8 space-y-6" method="POST" action = "?/updateUserAccount">
        <input type="hidden" name="remember" value="true">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="id" class="sr-only">아이디</label>
            <input id="id" name="id" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="아이디">
          </div>
          <div>
            <label for="password" class="sr-only">비밀번호</label>
            <input id="password" name="password" type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="비밀번호">
          </div>
        </div>
  
        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            로그인
          </button>
        </div>
      </form>
    </div>
</div>
  