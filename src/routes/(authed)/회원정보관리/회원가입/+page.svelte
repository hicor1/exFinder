<!---------------------------------------------------------->
<!--------------- ⬇⬇⬇ SCRIPT  영역 ⬇⬇⬇ ------------------>
<script>
  /** @type {import('./$types').PageData} */
  

  //서비스 이름 변경 이벤트 ( 미쳤다... )
  let serviceName = '';
  let id = '';
  $: {
    id = `${serviceName}_`;
  }

  //Valid Date 초기값 ( +190 )부여
  const date = new Date();
  date.setDate(date.getDate() + 190);
  let validDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;


  //유효성 검사
  let pwd = '';
  let customerName = '';
  let memo = '';

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!serviceName || !id || !pwd || !customerName || !validDate) {
      alert('모든 필드를 채워주세요.');
      return;
    }

    if (pwd.length < 5 || customerName.length < 5) {
      alert('Password와 Customer Name은 최소 5글자 이상이어야 합니다.');
      return;
    }

    // 문제없으면 회원가입 진행
    // 확인 메시지 표시
    if (confirm(`서비스 이름: ${serviceName}\n만료기한: ${validDate}\n고객명: ${customerName}\n\n회원가입을 진행하시겠습니까?`)) {
      event.target.submit();  // 사용자가 '확인'을 클릭하면 form 제출
    } else {
      event.preventDefault();  // 사용자가 '취소'를 클릭하면 form 제출 중지
    }
  };

    //form 저장결과 리턴받기
    export let form;
    import { onMount } from 'svelte';
    onMount(() => {
        if (form && form.status === 'success') {
            alert('회원 가입이 정상적으로 완료되었습니다');
        }
    });

</script>


<!---------------------------------------------------------->
<!------------------ ⬇⬇⬇ HTML 영역 ⬇⬇⬇ ------------------>

<div class="text-center my-6">
  <h1 class="text-4xl font-bold">신규회원가입</h1>
</div>

<form on:submit={handleSubmit} method="post" id="create-user-form" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto">

  <div class="mb-2">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="service-name">
      Service Name
    </label>
    <select name = "service_name" bind:value={serviceName} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      <option value="KREAM_보판매크로">KREAM_보판매크로</option>
      <option value="KREAM_ERP">KREAM_ERP</option>
      <option value="KREAM_구매보판매크로">KREAM_구매보판매크로</option>
    </select>
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="id">
      ID
    </label>
    <input name = "id" bind:value={id} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Enter ID">
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="pwd">
      Password
    </label>
    <input id="pwd" bind:value={pwd} name="pwd" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter password">
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="customer-name">
      Customer Name
    </label>
    <input id="customer-name" bind:value={customerName} name="customer_name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter customer name">
  </div>  
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="valid-date">
      Valid Date
    </label>
    <input name = "valid_date" bind:value={validDate} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="valid-date" type="date">
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="memo">
      Memo
    </label>
    <textarea name = "memo" rows="5" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="memo" type="text" placeholder="Enter memo"></textarea>
  </div>
  <div class="flex items-center justify-end">
    <button class="btn btn-primary" type="submit">회원가입</button>
    
  </div>
</form>
