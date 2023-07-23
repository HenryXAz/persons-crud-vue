<template>
  <div class="w-full md:w-2/4 mx-auto overflow-y-auto py-5">
    <table class="border-collapse w-full mx-auto">
    <thead>
      <tr >
        <th class=" bg-gray-400 dark:bg-darkmode-2 animate-pulse p-5 d-block"></th>
        <th class=" bg-gray-400 dark:bg-darkmode-2 animate-pulse p-5 d-block"></th>
        <th class=" bg-gray-400 dark:bg-darkmode-2 animate-pulse p-5 d-block"></th>
      </tr>
    </thead >
    <tbody class="mt-5 d-block w-full begore:mt-5">
      <tr class="d-block">
        <td class="bg-gray-300 dark:bg-darkmode-1 animate-pulse  p-5 d-block"></td>
        <td class="bg-gray-300 dark:bg-darkmode-1 animate-pulse  p-5 d-block"></td>
        <td class="bg-gray-300 dark:bg-darkmode-1  animate-pulse p-5 d-block"></td>
      </tr>
      <tr>
        <td class="bg-gray-400 dark:bg-darkmode-2 animate-pulse  p-5 d-block"></td>
        <td class="bg-gray-400 dark:bg-darkmode-2 animate-pulse  p-5 d-block"></td>
        <td class="bg-gray-400 dark:bg-darkmode-2  animate-pulse p-5 d-block"></td>
      </tr>
      <tr>
        <td class="bg-gray-300 dark:bg-darkmode-1 animate-pulse  p-5 d-block"></td>
        <td class="bg-gray-300 dark:bg-darkmode-1 animate-pulse  p-5 d-block"></td>
        <td class="bg-gray-300 dark:bg-darkmode-1  animate-pulse p-5 d-block"></td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script setup>
</script>

<style scoped>
tbody:before {
    line-height:1em;
    content:".";
    color:transparent;
    display:block;
}

</style>