<script setup>
defineProps(['post'])

const { isDarkMode } = useDarkMode()

</script>

<template>
    <div>
        <div class="col">
            <div class="card h-100 " :class="isDarkMode ? 'bg-dark text-white border-0' : null">
                <img :src="post.img" class="card-img-top" :alt="post.title">
                <div class="card-body" style="height: 5rem;">
                    <h5 class="card-title">{{ post.title }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>