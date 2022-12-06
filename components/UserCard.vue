<template>
    <div v-if="user" class="flex items-center space-x-3 rounded bg-white p-3">
        <img
            :alt="name"
            :src="profile"
            class="h-12 w-12 rounded-full border-2 border-blue-400"
        />
        <div class="text-right">
            <div class="font-medium">{{ name }}</div>
            <button class="text-sm text-slate-500 underline" @click="logOut">
                Log out
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
const user = useSupabaseUser()
const { auth } = useSupabaseClient()

const name = computed(() => user.value?.user_metadata.full_name)
const profile = computed(() => user.value?.user_metadata.avatar_url)

async function logOut() {
    const { error } = await auth.signOut()
    if (error) {
        console.error(error)
        return
    }

    try {
        await $fetch(`/api/_supabase/session`, {
            method: 'POST',
            body: { event: 'SIGNED_OUT', session: null }
        })
        user.value = null
    } catch (e) {
        console.error(e)
    }

    await navigateTo('/login')
}
</script>
