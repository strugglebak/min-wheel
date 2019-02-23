<template>
    <div class="container">
        <div class="example">
            <mw-icon name="error"></mw-icon>
            <mw-icon name="info"></mw-icon>
            <mw-icon name="down"></mw-icon>
            <mw-icon name="up"></mw-icon>
            <mw-icon name="next"></mw-icon>
            <mw-icon name="back"></mw-icon>
            <mw-icon name="loading"></mw-icon>
            <mw-icon name="settings"></mw-icon>
        </div>
        <pre class="code"><code>{{code}}</code></pre>
    </div>
</template>
<script>
import Icon from '../../../src/icon'

export default {
    components: {
        'mw-icon': Icon
    },
    data() {
        return {
            code: `
              <mw-icon name="error"></mw-icon>
              <mw-icon name="info"></mw-icon>
              <mw-icon name="down"></mw-icon>
              <mw-icon name="up"></mw-icon>
              <mw-icon name="next"></mw-icon>
              <mw-icon name="back"></mw-icon>
              <mw-icon name="loading"></mw-icon>
              <mw-icon name="settings"></mw-icon>
            `.replace(/^ {14}/gm, '').trim()
      }
    },
}
</script>
<style lang="scss" scoped>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    .container {
        border: 1px solid rgba(0,0,0,.15);
        padding: 20px;
        border-radius: 4px;
        -webkit-box-shadow: 0 2px 2px rgba(0,0,0,.05);
        box-shadow: 0 2px 2px rgba(0,0,0,.05);
        margin: 10px 0;
        & .mw-icon {
            width: 30px; height: 30px;
        }
        & > pre.code {
            // background: rgba(0,0,0,.04);
            // color: rgba(0,0,0,.65);
            > code {
                letter-spacing: 0;
            }
        }
    }
</style>
