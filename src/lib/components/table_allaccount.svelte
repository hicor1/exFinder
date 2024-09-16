<script>
  // @ts-ignore
  export let data ;
  // @ts-ignore
  export let path ;
  let search = '';
</script>

<div class="overflow-x-auto flex justify-center items-center flex-col">
  <!-- 검색창에 스타일을 추가합니다. -->
  <input type="text" bind:value={search} placeholder="검색어 때려박자" class="mb-4 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-2/3" />

  <table class="table">
      <!-- head -->
      <thead>
          <tr class="sticky top-1 bg-blue-200">
              <th>service_name</th>
              <th>아이디</th>
              <th>고객이름</th>
              <th>유효기간</th>
              <th>남은날짜(일)</th>
              <th>메모</th>
          </tr>
      </thead>
      <tbody>
          {#each data.AllAccount as item (item.id)}
              {#if item.service_name.includes(search) || item.id.includes(search) || item.customer_name.includes(search) || item.valid_date.includes(search)}
                  <tr class="hover:bg-gray-200">
                      <td colspan="6">
                          <a href = "{path}/회원정보수정/{item.id}">
                              <div class="grid grid-cols-6 gap-4">
                                  <div>{item.service_name}</div>
                                  <div>{item.id}</div>
                                  <div>{item.customer_name}</div>
                                  <div>{item.valid_date}</div>
                                  <div>{item.remaining_days}</div>
                                  <div>{item.memo}</div>
                              </div>
                          </a>
                      </td>
                  </tr>
              {/if}
          {/each}
      </tbody>
  </table>
</div>
