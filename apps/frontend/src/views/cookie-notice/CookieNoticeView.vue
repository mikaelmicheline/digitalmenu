<template>
  <GenericHeader />
  <main>

    <section>
      <nav>
        <button type="button" @click="$router.go(-1)">
          &lt; Back
        </button>
      </nav>
    </section>

    <section>
      <h1>Cookie Notice</h1>
      <p>Do officia aute minim Lorem adipisicing laboris anim consequat culpa minim eiusmod. Qui exercitation exercitation pariatur officia exercitation cupidatat aliquip pariatur sit laboris nulla. Nisi ad do culpa enim quis consequat non culpa excepteur sunt. Officia ut est enim excepteur mollit est ad velit commodo consectetur eu labore elit velit. Incididunt proident dolor ea amet. Reprehenderit dolore sit Lorem duis nisi incididunt ut velit non in laboris cupidatat proident adipisicing. Exercitation non tempor voluptate ex nulla anim nisi nostrud esse ullamco fugiat. Fugiat reprehenderit dolore duis est. Dolor aliqua proident fugiat proident irure pariatur non ea deserunt elit incididunt proident sunt. Est Lorem irure officia mollit tempor in magna. Velit eu eu nostrud enim consequat. Lorem in dolor sint do nostrud mollit adipisicing id id excepteur id proident eiusmod et. Veniam eiusmod excepteur veniam enim consequat aute consequat. Ad ipsum eu esse duis deserunt ipsum duis do labore. Consequat commodo duis officia consequat voluptate culpa irure incididunt cupidatat. Officia nostrud id laborum velit voluptate fugiat. Nulla anim anim ea mollit. Do fugiat adipisicing esse est aliquip Lorem occaecat nulla. Quis consequat non cupidatat consequat velit minim Lorem ut.</p>
      <p>Irure enim velit excepteur deserunt in duis ex ex cillum veniam. Commodo irure minim ea in minim excepteur. Dolor minim pariatur id fugiat consectetur cupidatat officia. Ad aliquip consequat culpa aute in ad exercitation ipsum. Aliqua fugiat nulla esse laboris sunt ipsum veniam magna tempor Lorem pariatur nostrud nostrud sint. Et id et incididunt mollit labore elit dolor cillum enim sunt labore proident culpa ullamco. Incididunt velit nisi exercitation cupidatat commodo velit. Tempor anim labore cillum reprehenderit cupidatat. Velit elit occaecat pariatur ut proident aliquip duis incididunt fugiat sint labore culpa amet eiusmod. Eiusmod duis cupidatat dolore sint officia pariatur id voluptate esse dolore aute Lorem cillum. Velit enim aliqua anim laboris excepteur sint aute officia aliquip pariatur sunt. Dolore proident in ex nisi dolor ad minim. Eiusmod id ex ut magna tempor eiusmod consectetur nisi consequat laboris mollit. Consectetur exercitation ut ut sint ad enim cupidatat Lorem laboris velit laborum elit ipsum.</p>
      <ul class="ul">
        <li>Id laborum cillum pariatur deserunt laboris incididunt cupidatat.</li>
        <li>Adipisicing duis officia consectetur aliqua tempor tempor dolor ex nostrud commodo commodo quis tempor.</li>
        <li>Pariatur dolor eiusmod magna minim aute ullamco cillum esse occaecat laborum aute fugiat id pariatur.</li>
        <li>Do cupidatat laboris consectetur Lorem irure officia proident fugiat ipsum nostrud commodo sunt nisi amet.</li>
      </ul>
      <p>Mollit est do nostrud sint esse cillum. Voluptate do duis commodo duis proident nulla et excepteur nulla exercitation cillum id. Dolor dolore nulla officia enim Lorem et. Dolore labore consequat Lorem sint nostrud aliqua culpa veniam ex. Non laborum labore mollit consequat cillum nulla tempor eu consequat nostrud. Duis ut labore ullamco irure ad esse dolore minim eu in nisi reprehenderit deserunt. Aliqua laboris commodo anim nulla sint est exercitation nulla sit ad aute. Quis velit excepteur eiusmod et. Esse adipisicing esse occaecat dolor dolor culpa aliquip laborum.</p>
    </section>

  </main>

  <GenericFooter :display-powered-by="false"></GenericFooter>

</template>

<script lang="ts" setup>
</script>

<style scoped>
main {
  margin-top: 20px;
  padding: 0 20px;
  margin-bottom: 100px;
}

section {
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 40px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 40px;
}

p, li {
  font-size: 1.1rem;
  line-height: 1.3;
}

p, ul {
  margin-bottom: 20px;
}

li {
  list-style: circle;
  list-style-position: inside;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

nav > button {
  background-color: inherit;
  padding-bottom: 2px;
  border: 1px solid transparent;
}

nav > button:hover {
  border-bottom: 1px solid var(--font-1);
}

</style>
