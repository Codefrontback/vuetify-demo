<template>
    <v-container fluid>
        <v-form v-model="valid" lazy-validation>
            <v-text-field
                    label="Name"
                    v-model="name"
                    :rules="nameRules"
                    :counter="10"
                    required
            ></v-text-field>
            <v-text-field
                    label="E-mail"
                    v-model="email"
                    :rules="emailRules"
                    required
            ></v-text-field>

            <v-menu
                    v-model="menu1"
                    :close-on-content-click="false"
                    full-width
                    max-width="290"
                >
                <v-text-field
                        slot="activator"
                        :value="computedDateFormattedMomentjs"
                        clearable
                        label="Birth Date"
                        readonly
                ></v-text-field>
                <v-date-picker
                        v-model="date"
                        @change="menu1 = false"
                ></v-date-picker>
            </v-menu>

            <v-btn class="v-btn--block" color="success">Submit</v-btn>
        </v-form>
    </v-container>
</template>

<script>

    import moment from 'moment'

    export default {
        data: () => ({
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters'
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            newDate: '',
            dateRule: [
                v => !!v || 'Date is required'
            ],
            select: null,
            items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4'
            ],
            date: '',
            menu1: false,
            menu2: false
        }),
        computed: {
            computedDateFormattedMomentjs() {
                return this.date ? moment(this.date).format('DD/MM/YYYY') : ''
            },
        }
    }
</script>