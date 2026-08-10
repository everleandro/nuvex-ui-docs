<template>
    <section class="landing-dashboard__view">
        <ERow class="landing-dashboard__hero py-4 mb-2">
            <ECol class="flex-1-1-0 d-flex items-center">
                <div class="d-flex flex-column gap-1">
                    <p class="landing-dashboard__eyebrow type-caption">Customers</p>
                    <h3 class="mb-0">People and accounts that keep the studio busy</h3>
                </div>
            </ECol>
            <ECol cols="auto" class="d-flex items-center">
                <div class="d-flex gap-1">
                    <EButton :text="state.mode == 'grid'" @click="state.mode = 'list'">
                        <EIcon :icon="$icon.viewList" :color="state.mode == 'list' ? 'primary' : 'muted'">
                        </EIcon>
                    </EButton>
                    <EButton :text="state.mode == 'list'" @click="state.mode = 'grid'">
                        <EIcon :icon="$icon.viewGrid" :color="state.mode == 'grid' ? 'primary' : 'muted'">
                        </EIcon>
                    </EButton>
                </div>
            </ECol>
        </ERow>

        <ERow class="mb-4">
            <ECol cols="6" md="3">
                <ECard tonal elevation="sm" color="primary" title="146" subtitle="Active clients" />
            </ECol>
            <ECol cols="6" md="3">
                <ECard tonal elevation="sm" color="secondary" title="24" subtitle="Returning this month" />
            </ECol>
            <ECol cols="6" md="3">
                <ECard tonal elevation="sm" color="success" title="82%" subtitle="Retention rate" />
            </ECol>
            <ECol cols="6" md="3">
                <ECard tonal elevation="sm" color="warning" title="12" subtitle="Pending follow-ups" />
            </ECol>
        </ERow>

        <div class="tab__container">
            <transition :name="listTrasition">
                <ERow class="mt-2" :key="`${state.mode}`">
                    <ECol v-for="(employee, index) in employees" :key="index" v-bind="colListAttributes">
                        <DashboardUser :model-value="employee" :grid-mode="state.mode === 'grid'" />
                    </ECol>
                </ERow>
            </transition>
        </div>
    </section>
</template>
<script setup lang="ts">
definePageMeta({
    layout: 'playground-dashboard',
})
const { getAvatarList } = useAvatars()
const state = reactive({
    mode: 'grid' as 'list' | 'grid',
})

const employees: Array<{ name: string; id: string; avatarSrc?: string; email?: string }> = [
    { name: 'Bob Brown', id: '4', email: 'bob.brown@example.com' },
    { name: 'Charlie Davis', id: '5', email: 'charlie.davis@example.com' },
    { name: 'Diana Evans', id: '6', email: 'diana.evans@example.com' }, ...getAvatarList()
]

const colListAttributes = computed(() => {
    return state.mode === 'list' ? { cols: 12 } : { cols: 12, lg: 6, xl: 4 }
})
const listTrasition = computed(() => state.mode === 'list' ? 'tab-reverse-transition' : 'tab-transition')
</script>

<style scoped>
.landing-dashboard__view {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.landing-dashboard__eyebrow {
    margin: 0;
    color: var(--e-color-primary);
    letter-spacing: 0.12em;
    text-transform: uppercase;
}
</style>