<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          v-for="cat in cats"
          :key="cat.id"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            {{cat.id}}
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container
      v-for="n in 6"
      :key="n"
    >
      <v-row>
        <v-col
          v-for="j in 6"
          :key="j"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            Cat {{ j }}, Ans {{ n }}
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
  export default {
    data: () => ({
      cats: [
        {
          'id': 1,
          'name': 'C1',
          'answers': [
            'one','two','three','four','five','six',
          ]
        },
        {
          'id': 2,
          'name': 'C2',
          'answers': [
            'one','two','three','four','five','six',
          ]
        },
        {
          'id': 3,
          'name': 'C3',
          'answers': [
            'one','two','three','four','five','six',
          ]
        },
        {
          'id': 4,
          'name': 'C4',
          'answers': [
            'one','two','three','four','five','six',
          ]
        },
        {
          'id': 5,
          'name': 'C5',
          'answers': [
            'one','two','three','four','five','six',
          ]
        },
        {
          'id': 6,
          'name': 'C6',
          'answers': [
            'one','two','three','four','five','six',
          ]
        },
      ],
    }),
  }
</script>