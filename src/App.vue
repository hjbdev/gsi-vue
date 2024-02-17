<script setup>
import useGSI from './composables/useGSI';
import usePlayers from './composables/usePlayers';

const gsi = useGSI();

const cts = usePlayers('CT');
const ts = usePlayers('T');
</script>
<template>

</template>