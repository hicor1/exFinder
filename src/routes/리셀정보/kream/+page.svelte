<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data['dataKREAM'])
</script>

<table class="table-auto shadow-md mx-auto w-full whispace-nowrap rounded-lg bg-white divide-y divide-gray-500 overflow-hidden">
    <!-- head -->
    <thead class="bg-gray-50">
        <tr class="text-gray-600 text-left">
            <th class="font-semibold text-sm uppercase px-6 py-4">
                제품명
            </th>
            <th class="font-semibold text-sm uppercase px-6 py-4">
                옵션
            </th>
            <th class="font-semibold text-sm uppercase px-6 py-4">
                즉시구매가격_일반판매입찰
            </th>
            <th class="font-semibold text-sm uppercase px-6 py-4">
                평균거래가격_보관판매입찰
            </th>
            <th class="font-semibold text-sm uppercase px-6 py-4">
                예상마진
            </th>
            <th class="font-semibold text-sm uppercase px-6 py-4">
                1일평균체결건수
            </th>
            <th class="font-semibold text-sm uppercase px-6 py-4">
                총판매량
            </th>
            <th class="font-semibold text-sm uppercase px-6 py-4">
                브랜드
            </th>
        </tr>
    </thead>
    <tbody class="text-gray-700">
        {#each data['dataKREAM'] as item }
            <tr class="hover:bg-gray-100">
                <td class="px-6 py-4">
                    <div class="flex items-center space-x-3">
                        <div>{item.제품명_번역}</div>
                    </div>
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center space-x-3">
                        <div>{item.옵션_1}</div>
                    </div>
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center space-x-3">
                        <div>{Number(item.즉시구매가격_일반판매입찰).toLocaleString() + "원"}</div>
                    </div>
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center space-x-3">
                        <div>{Number(item.평균거래가격_보관판매입찰).toLocaleString() + "원"}</div>
                    </div>
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center space-x-3">
                        <div>{Number(item.평균거래가격_보관판매입찰 - item.즉시구매가격_일반판매입찰).toLocaleString() + "원"}</div>
                    </div>
                </td>
                <td class="px-6 py-4 text-center">
                    <div class="flex items-center justify-center">
                        <div>{item["1일평균체결건수"]}</div>
                    </div>
                </td>
                <td class="px-6 py-4 text-center">
                    <div class="flex items-center justify-center">
                        <div>{item.총판매량}</div>
                    </div>
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center space-x-3">
                        <div>{item.브랜드명_원문}</div>
                    </div>
                </td>
            </tr>
        {/each}
    </tbody>
</table>
