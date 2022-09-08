<template>
  <v-row>
    <v-col cols="12">
      <v-card color="grey-lighten-3">
        <v-card-title>hogehoge</v-card-title>
        <v-divider color="grey-lighten-2"></v-divider>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-form>
                <v-text-field label="hoge1" variant="solo"></v-text-field>
                <v-text-field label="hoge2" variant="solo"></v-text-field>
                <v-text-field label="hoge3" variant="solo"></v-text-field>
                <v-text-field label="hoge4" variant="solo"></v-text-field>
              </v-form>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn variant="elevated" color="green-darken-4">hoe4</v-btn>
          <v-btn variant="elevated" color="green-darken-4">hoe4</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12">
      <v-card color="grey-lighten-3">
        <v-card-title>fugafuga</v-card-title>
        <v-divider color="grey-lighten-2"></v-divider>
        <v-card-text>
          <v-table>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Calories</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>hogeeee1</td>
                <td>hogeeee2</td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
        <v-card-actions> </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
