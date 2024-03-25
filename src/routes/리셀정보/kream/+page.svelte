<script>
    /** @type {import('./$types').PageData} */
    export let data;

    let sortKey = null;
    let isAscending = true;

    function sortData(by) {
        if (sortKey === by) {
        isAscending = !isAscending;
        } else {
        isAscending = true;
        }
        sortKey = by;

        data = data.sort((a, b) => {
        if (a[by] === b[by]) return 0;
        return (a[by] < b[by] ? -1 : 1) * (isAscending ? 1 : -1);
        });
  }
    
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

<table class="table-auto shadow-md mx-auto w-full whispace-nowrap rounded-lg bg-white divide-y divide-gray-500 overflow-hidden">
    <!-- head -->
    <thead class="bg-gray-50">
        <tr class="text-gray-600 text-left">
            <th class="font-semibold text-sm uppercase px-6 py-4">
                이미지
            </th>
            <th class="font-semibold text-sm uppercase px-6 py-4">
                제품명
            </th>
            <th class="font-semibold text-sm uppercase px-6 py-4">
                옵션
            </th>
            <th on:click={() => sortData('일반입찰마진')} class="font-semibold text-sm uppercase px-6 py-4">
                일반입찰마진
            </th>
            <th class="font-semibold text-sm uppercase px-6 py-4">
                보판입찰마진
            </th>
            <th class="font-semibold text-sm uppercase px-6 py-4">
                KREAM
            </th>
            <th class="font-semibold text-sm uppercase px-6 py-4">
                OKmall
            </th>

        </tr>
    </thead>
    <tbody class="text-gray-700">
        {#each data['dataKREAM'] as item }
            <tr class="hover:bg-gray-100">
                <td class="px-6 py-4">
                    <div class="flex justify-center my-8">
                        <img src={item.제품_이미지} referrerPolicy="no-referrer" alt="이미지 설명" style="max-width: 100px; height: auto;">
                    </div>                    
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center space-x-3">
                        <div>{item.제품명_원문}</div>
                    </div>
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center space-x-3">
                        <div>{item.옵션_1}</div>
                    </div>
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center space-x-3">
                        <div>{Number(item.즉시구매가격_일반판매입찰 - item.okmall_즉시구매가격).toLocaleString() + "원"}</div>
                    </div>
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center space-x-3">
                        <div>{Number(item.즉시구매가격_보관판매입찰 - item.okmall_즉시구매가격).toLocaleString() + "원"}</div>
                    </div>
                </td>

                <td class="px-6 py-4 text-center">
                    <div class="flex items-center justify-center">
                        <a href={item["제품_URL"]} target='None1'><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </td>
                <td class="px-6 py-4 text-center">
                    <div class="flex items-center justify-center">
                        <a href={item["okmall_URL"]} target='None2'><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </td>
            </tr>
        {/each}
    </tbody>
</table>
