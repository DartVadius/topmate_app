<template>
  <nav class="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav">
      <li class="nav-item nav-category">
        <span class="nav-link">Dashboard</span>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" @click="openComponent('dashboard')">
          <span class="menu-title">Dashboard</span>
          <i class="icon-screen-desktop menu-icon"></i>
        </a>
      </li>
      <li class="nav-item nav-category"><span class="nav-link">Настройки</span></li>
      <li class="nav-item">
        <a class="nav-link" href="#" @click="openComponent('contact')">
          <span class="menu-title">Messages</span>
          <i class="icon-bell menu-icon"></i>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" @click="openComponent('faq')">
          <span class="menu-title">FAQ</span>
          <i class="icon-book-open menu-icon"></i>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" @click="openComponent('calculator')">
          <span class="menu-title">Calculator</span>
          <i class="icon-globe menu-icon"></i>
        </a>
      </li>
      <li class="nav-item nav-category"><span class="nav-link">Sample Pages</span></li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
          <span class="menu-title">General Pages</span>
          <i class="icon-doc menu-icon"></i>
        </a>
        <div class="collapse" id="auth">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"> <a class="nav-link" href="pages/samples/login.html"> Login </a></li>
            <li class="nav-item"> <a class="nav-link" href="pages/samples/register.html"> Register </a></li>
            <li class="nav-item"> <a class="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
            <li class="nav-item"> <a class="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
            <li class="nav-item"> <a class="nav-link" href="pages/samples/blank-page.html"> Blank Page </a></li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'SidebarComponent',
  methods: {
    openComponent (component) {
      console.log(component)
      this.$emit('openComponent', component)
    }
  }
}
</script>

<style scoped>

</style>
