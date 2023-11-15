<template>
  <div class="datatable-wrapper">

    <div class="datatable-filters-wrapper" v-if="!noControls">
      <Row class="gx-4">
        <Col lg="3">
          <DatatableFilter v-model="filter"/>
        </Col>
        <Col lg="9">
          <DatatableControls
            v-model:pageSize="pageSize"
            v-model:pageNumber="pageNumber"
            :total-items="items.length"
          />
        </Col>
      </Row>
    </div>

    <Table :items="pagedItems" :fields="fields" class="datatable" borderless>
      <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
        <slot :name="name" v-bind="slotData"/>
      </template>
    </Table>

  </div>
</template>

<script setup>
import {computed, ref} from "vue";


const emit = defineEmits(['refresh'])
const props = defineProps({
  items: {
    type: Array,
    default: [],
  },
  fields: {
    type: Array,
    default: [],
  },
  displayMode: {
    type: String,
  },
  noControls: {
    type: Boolean,
    default: false
  }
})

const datatableItems = computed(() => props.items);
datatableItems.value.map((item, index) => {
  item.selected = true
  item.index = index;
});

const filter = ref('');
const filteredItems = computed(() => props.items.filter(item => {
  return Object.values(item).toString().toLowerCase().includes(filter.value.toLowerCase());
}))

const pageSize = ref(25);
const pageNumber = ref(1);
const pageOffset = computed(() => {
  return (pageNumber.value * pageSize.value) - pageSize.value;
})
const pagedItems = computed(() => {
  return filteredItems.value.slice(pageOffset.value, pageOffset.value + pageSize.value);
})

const selected = computed(() => datatableItems.value.filter(item => item.selected));
</script>


<style lang="scss">
.datatable-wrapper {
  background-color: var(--bs-surface);
  border-radius: .75rem;

  .datatable-filters-wrapper {
    padding: 1rem 1.5rem;
    border-radius: var(--bs-border-radius);
  }

  .datatable-search-bar {

    &:focus-within {
      border-color: var(--bs-primary);
    }

    .input-group-text {
      color: var(--bs-border-color);
    }
  }

  .table-responsive {
    border-bottom: 0;
  }

  .datatable {
    table-layout: auto;
    width: 100%;

    .td-actions {
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: flex-end;
    }

    & > tbody,
    & > thead,
    & > tfoot {

      & > tr {

        & > th:first-child,
        & > td:first-child {
          max-width: 80px;
          width: 80px;
        }
      }
    }
  }
}
</style>
