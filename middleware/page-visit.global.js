// global middleware

export default defineNuxtRouteMiddleware(() => {
    console.log("GLobal")
    const pageVisitCount =  usePageVisitCount();
    pageVisitCount.value++;
})