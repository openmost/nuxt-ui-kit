<template>

  <section>
    <SectionHeader title="Segments">
      <template #actions>
        <Button variant="outline-primary">
          <IconExport/>
          Export
        </Button>
        <Button variant="outline-danger">
          <IconDelete/>
          Delete
        </Button>
        <Button variant="primary">
          <IconImport/>
          Import
        </Button>
      </template>
    </SectionHeader>

    <div class="table-wrapper">
      <Datatable :items="items" :fields="fields" display-mode="import">
        <template #cell(selected)="row">
          <FormCheckbox
            :id="row.item.idsegment.toString()"
            :modelValue="row.item.selected"
            @change="row.item.selected = !row.item.selected">
            {{ row.item.idsegment }}
          </FormCheckbox>
        </template>

        <template #cell(name)="row">
          <FormInput
            v-model="row.item.name"
            size="sm"
            @change="onUpdateItem(row.item)"
          />
        </template>

        <template #cell(definition)="row">
          <code>{{ row.item.definition }}</code>
        </template>

        <template #cell(enable_all_users)="row">
          <FormSelect
            v-model="row.item.enable_all_users"
            name="enable_all_users"
            size="sm"
            :options="enableAllUsersOptions"
            @change="onUpdateItem(row.item)">
          </FormSelect>
        </template>

        <template #cell(enable_only_idsite)="row">
          <FormSelect
            v-model="row.item.enable_only_idsite"
            name="enable_only_idsite"
            size="sm"
            :options="enableOnlyIdsiteOptions"
            @change="onUpdateItem(row.item)">
          </FormSelect>
        </template>

        <template #cell(auto_archive)="row">
          <FormSelect
            v-model="row.item.auto_archive"
            name="auto_archive"
            size="sm"
            :options="autoArchiveOptions"
            @change="emit('update', row.item)"
          ></FormSelect>
        </template>

        <template #cell(ts_created)="row">
          {{ row.item.ts_created ? new Date(row.item.ts_created).toLocaleDateString() : '-' }}
        </template>

        <template #cell(ts_last_edit)="row">
          {{ row.item.ts_last_edit ? new Date(row.item.ts_last_edit).toLocaleDateString() : '-' }}
        </template>

        <template #cell(login)="row">
          <UserButton :login="row.item.login"/>
        </template>

        <template #cell(actions_editor)="row">
          <div class="td-actions">
            <DeleteButton size="sm" @click="emit('delete', row.item)"/>
          </div>
        </template>

        <template #cell(actions_import)="row">
          <div class="td-actions">
            <ImportButton size="sm" @click="emit('import', row.item)"/>
          </div>
        </template>

        <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
          <slot :name="name" v-bind="slotData"/>
        </template>
      </Datatable>
    </div>

  </section>

</template>

<script setup>
import {ref} from "vue";

const emit = defineEmits(['update', 'delete', 'import'])

const fields = ref([
  {key: 'selected', label: ''},
  {key: 'name', label: 'Name', thStyle: 'width: 300px; min-width: 300px'},
  {key: 'definition', label: 'Definition', thStyle: 'width: 200px; min-width: 200px'},
  {key: 'enable_all_users', label: 'For all users', thStyle: 'width: 190px; min-width: 190px'},
  {key: 'enable_only_idsite', label: 'For site id only', thStyle: 'width: 190px; min-width: 190px'},
  {key: 'auto_archive', label: 'Auto archive', thStyle: 'width: 190px; min-width: 190px'},
  {key: 'actions_import', label: ''},
])

const items = ref([
  {
    "idsegment": 1,
    "name": "Bounced sessions",
    "definition": "interactions==1",
    "enable_all_users": 1,
    "enable_only_idsite": 0,
    "auto_archive": 1,
  },
  {
    "idsegment": 2,
    "name": "Converters",
    "definition": "visitConverted>=1",
    "enable_all_users": 1,
    "enable_only_idsite": 0,
    "auto_archive": 1,
  },
  {
    "idsegment": 3,
    "name": "Direct Traffic",
    "definition": "referrerType==direct",
    "enable_all_users": 1,
    "enable_only_idsite": 0,
    "auto_archive": 1,
  },
  {
    "idsegment": 4,
    "name": "Made a Purchase",
    "definition": "orderId==*",
    "enable_all_users": 1,
    "enable_only_idsite": 0,
    "auto_archive": 1,
  },
  {
    "idsegment": 5,
    "name": "Mobile and Tablet Traffic",
    "definition": "deviceType==smartphone,deviceType==tablet",
    "enable_all_users": 1,
    "enable_only_idsite": 0,
    "auto_archive": 1,
  },
  {
    "idsegment": 6,
    "name": "Mobile Traffic",
    "definition": "deviceType==smartphone",
    "enable_all_users": 1,
    "enable_only_idsite": 0,
    "auto_archive": 1,
  },
  {
    "idsegment": 7,
    "name": "Multi-session Users",
    "definition": "visitCount>=1",
    "enable_all_users": 1,
    "enable_only_idsite": 0,
    "auto_archive": 1,
  },
  {
    "idsegment": 8,
    "name": "New Users",
    "definition": "visitorType==new",
    "enable_all_users": 1,
    "enable_only_idsite": 0,
    "auto_archive": 1,
  },
  {
    "idsegment": 9,
    "name": "Non-bounce Sessions",
    "definition": "interactions>=2",
    "enable_all_users": 1,
    "enable_only_idsite": 0,
    "auto_archive": 1,
  },
  {
    "idsegment": 10,
    "name": "Non-converters",
    "definition": "visitConverted!=1,visitEcommerceStatus==none",
    "enable_all_users": 1,
    "enable_only_idsite": 0,
    "auto_archive": 1,
  },
  {
    "idsegment": 11,
    "name": "Organic Traffic",
    "definition": "referrerType==search",
    "enable_all_users": 1,
    "enable_only_idsite": 0,
    "auto_archive": 1,
  },
  {
    "idsegment": 12,
    "name": "Paid Traffic",
    "definition": "",
    "enable_all_users": 1,
    "enable_only_idsite": 0,
    "auto_archive": 1,
  },
  {
    "idsegment": 13,
    "name": "Performed Site Search",
    "definition": "searches>=1",
    "enable_all_users": 1,
    "enable_only_idsite": 0,
    "auto_archive": 1,
  },
  {
    "idsegment": 14,
    "name": "Referral Traffic",
    "definition": "referrerType==website",
    "enable_all_users": 1,
    "enable_only_idsite": 0,
    "auto_archive": 1,
  },
  {
    "idsegment": 15,
    "name": "Returning Users",
    "definition": "visitorType==returning",
    "enable_all_users": 1,
    "enable_only_idsite": 0,
    "auto_archive": 1,
  },
  {
    "idsegment": 16,
    "name": "Search Traffic",
    "definition": "",
    "enable_all_users": 1,
    "enable_only_idsite": 0,
    "auto_archive": 1,
  },
  {
    "idsegment": 17,
    "name": "Sessions with Conversions",
    "definition": "visitConverted>=1",
    "enable_all_users": 1,
    "enable_only_idsite": 0,
    "auto_archive": 1,
  },
  {
    "idsegment": 18,
    "name": "Sessions with Transactions",
    "definition": "visitEcommerceStatus==ordered",
    "enable_all_users": 1,
    "enable_only_idsite": 0,
    "auto_archive": 1,
  },
  {
    "idsegment": 19,
    "name": "Single Session Users",
    "definition": "visitCount==1",
    "enable_all_users": 1,
    "enable_only_idsite": 0,
    "auto_archive": 1,
  },
  {
    "idsegment": 20,
    "name": "Tablet and Desktop Traffic",
    "definition": "deviceType==tablet,deviceType==desktop",
    "enable_all_users": 1,
    "enable_only_idsite": 0,
    "auto_archive": 1,
  },
  {
    "idsegment": 21,
    "name": "Tablet Traffic",
    "definition": "deviceType==tablet",
    "enable_all_users": 1,
    "enable_only_idsite": 0,
    "auto_archive": 1,
  },
])

const enableAllUsersOptions = [
  {value: 0, text: '👤 Only me'},
  {value: 1, text: '👥 All users'},
]

const enableOnlyIdsiteOptions = [
  {value: 0, text: '🌍 All websites'},
  {value: 1, text: '🌐 Only this site'},
]

const autoArchiveOptions = [
  {value: 0, text: '❌ Real time'},
  {value: 1, text: '✅ Pre-processed'},
]

function onUpdateItem(item) {
  emit('update', item)
}
</script>

<style lang="scss">
.table-wrapper {
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-color: var(--bs-surface);
}
</style>
