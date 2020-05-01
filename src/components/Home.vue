<template>
    <div class="home container center">
      <h4 class="center pink-text">Choose Category</h4>
          <div class="row">
            <div class="col s12 m4">
              <div class="card">
                <router-link to="question/9">
                <div class="card-image">
                  <img src="../assets/generalKnowledge.jpg">
                    <a class="btn-floating halfway-fab waves-effect waves-light pink"><i class="material-icons">play_arrow</i></a>
                </div>
                </router-link>
                <div class="card-content">
                  <span class="card-title">General Knowledge</span>
                </div>
              </div>
            </div>
            <div class="col s12 m4">
              <div class="card">
                <router-link to="question/17">
                <div class="card-image">
                  <img src="../assets/science.jpg">
                    <a class="btn-floating halfway-fab waves-effect waves-light pink"><i class="material-icons">play_arrow</i></a>
                </div>
                </router-link>
                <div class="card-content">
                  <span class="card-title">Science and Nature</span>
                </div>
              </div>
            </div>
            <div class="col s12 m4">
              <div class="card">
                <router-link to="question/27">
                <div class="card-image">
                  <img src="../assets/animals.jpg">
                    <a class="btn-floating halfway-fab waves-effect waves-light pink"><i class="material-icons">play_arrow</i></a>
                </div>
                </router-link>
                <div class="card-content">
                  <span class="card-title">Animals</span>
                </div>
              </div>
            </div>
            <div class="col s12 m4">
              <div class="card">
                <router-link to="question/18">
                <div class="card-image">
                  <img src="../assets/computers.jpg">
                    <a class="btn-floating halfway-fab waves-effect waves-light pink"><i class="material-icons">play_arrow</i></a>
                </div>
                </router-link>
                <div class="card-content">
                  <span class="card-title">Computers</span>
                </div>
              </div>
            </div>
            <div class="col s12 m4">
              <div class="card">
                <router-link to="question/23">
                <div class="card-image">
                  <img src="../assets/history.jpg">
                    <a class="btn-floating halfway-fab waves-effect waves-light pink"><i class="material-icons">play_arrow</i></a>
                </div>
                </router-link>
                <div class="card-content">
                  <span class="card-title">History</span>
                </div>
              </div>
            </div>
            <div class="col s12 m4">
              <div class="card">
                <router-link to="question/31">
                <div class="card-image">
                  <img src="../assets/japaneseAnimesManga.jpg">
                    <a class="btn-floating halfway-fab waves-effect waves-light pink"><i class="material-icons">play_arrow</i></a>
                </div>
                </router-link>
                <div class="card-content">
                  <span class="card-title">Japanese Mangas</span>
                </div>
              </div>
            </div>
            <div class="col s12 m4">
              <div class="card">
                <router-link to="question/10">
                <div class="card-image">
                  <img src="../assets/books.jpg">
                    <a class="btn-floating halfway-fab waves-effect waves-light pink"><i class="material-icons">play_arrow</i></a>
                </div>
                </router-link>
                <div class="card-content">
                  <span class="card-title">Books</span>
                </div>
              </div>
            </div>
            <div class="col s12 m4">
              <div class="card">
                <router-link to="question/212">
                <div class="card-image">
                  <img src="../assets/politics.jpg">
                    <a class="btn-floating halfway-fab waves-effect waves-light pink"><i class="material-icons">play_arrow</i></a>
                </div>
                </router-link>
                <div class="card-content">
                  <span class="card-title">Politics</span>
                </div>
              </div>
            </div>
            <div class="col s12 m4">
              <div class="card">
                <router-link to="question/19">
                <div class="card-image">
                  <img src="../assets/mathematics.jpg">
                    <a class="btn-floating halfway-fab waves-effect waves-light pink"><i class="material-icons">play_arrow</i></a>
                </div>
                </router-link>
                <div class="card-content">
                  <span class="card-title">Mathematics</span>
                </div>
              </div>
            </div>
            <div class="col s12 m4">
              <div class="card">
                <router-link to="question/15">
                <div class="card-image">
                  <img src="../assets/videosGames.jpg">
                    <a class="btn-floating halfway-fab waves-effect waves-light pink"><i class="material-icons">play_arrow</i></a>
                </div>
                </router-link>
                <div class="card-content">
                  <span class="card-title">videos Games</span>
                </div>
              </div>
            </div>
            <div class="col s12 m4">
              <div class="card">
                <router-link to="question/12">
                <div class="card-image">
                  <img src="../assets/musics.jpg">
                    <a class="btn-floating halfway-fab waves-effect waves-light pink"><i class="material-icons">play_arrow</i></a>
                </div>
                </router-link>
                <div class="card-content">
                  <span class="card-title">Musics</span>
                </div>
              </div>
            </div>
            <div class="col s12 m4">
              <div class="card">
                <router-link to="question/22">
                <div class="card-image">
                  <img src="../assets/geography.jpg">
                    <a class="btn-floating halfway-fab waves-effect waves-light pink"><i class="material-icons">play_arrow</i></a>
                </div>
                </router-link>
                <div class="card-content">
                  <span class="card-title">Geography</span>
                </div>
              </div>
            </div>
          </div>
    </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      
    }
  },
}
</script>

<style scoped>
.home{
    max-width: 800px;
    margin-top: 40px;
}
.home h3{
    font-size: 2em;
}
.home p{
    font-size: 1.2em;
}
</style>