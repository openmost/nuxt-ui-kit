<template>
  <ToolContentLayout>

    <template #menu>

      <div>
        <h2 class="h4">Getting started</h2>

        <Nav vertical anchor>
          <NavItem :to="{path: '/tool', hash: '#test'}">Required parameters</NavItem>
          <NavItem :to="{path: '/tool', hash: '#demo'}">Optionals parameters</NavItem>
          <NavItem :to="{path: '/tool', hash: '#tututu'}">Seconds parameters</NavItem>
        </Nav>
      </div>

      <div>
        <h2 class="h4">Parameters</h2>
        <FormCheckbox switch>Only Matomo</FormCheckbox>
      </div>

      <div>
        <h2 class="h4">Ressources</h2>
        <Nav vertical>
          <NavItem to="https://google.com" external>
            <template #icon>
              <LogoMatomo/>
            </template>
            Official documentation
          </NavItem>
          <NavItem to="https://ronan-hello.fr" external>
            <template #icon>
              <LogoRonanHello/>
            </template>
            Learn more about parameters
          </NavItem>
        </Nav>
      </div>

      <ToolCtaCard/>

    </template>


    <Card title="Required parameters" v-for="i in [1, 2, 3, 4]" id="demo">

      <fieldset>
        <legend>Required parameters</legend>

        <FormGroup label="Page URL" description="The full website URL (https://your-website.com)" class="mb-4">
          <FormInputGroup size="lg">
            <template #prepend>
              <code class="input-group-text">&utm_source</code>
            </template>

            <FormSelect value="https://monsite.com"
                        :options="[{text: 'test', value: 1},{text: 'test', value: 1}, {text: 'test', value: 1}]"/>

          </FormInputGroup>
        </FormGroup>


        <FormGroup label="Page URL" description="The full website URL (https://your-website.com)" class="mb-4">
          <FormInputGroup>
            <template #prepend>
              <code class="input-group-text">&utm_source</code>
            </template>
            <FormInput value="https://monsite.com"/>
          </FormInputGroup>
        </FormGroup>

        <FormGroup label="Page URL" description="The full website URL (https://your-website.com)" class="mb-4">
          <FormInputGroup>
            <template #prepend>
              <code class="input-group-text">&utm_source</code>
            </template>
            <FormInput value="https://monsite.com"/>
          </FormInputGroup>
        </FormGroup>

        <FormGroup label="Page URL" description="The full website URL (https://your-website.com)">
          <FormInputGroup>
            <template #prepend>
              <code class="input-group-text">&utm_source</code>
            </template>
            <FormInput value="https://monsite.com"/>
          </FormInputGroup>
        </FormGroup>
      </fieldset>
    </Card>


    <template #output>

      <ToolOutputCopyUrl :url="url"/>

      <ToolOutputCard title="Or use this QR code">
        {{ url }}
      </ToolOutputCard>

    </template>

  </ToolContentLayout>
</template>

<script setup lang="ts">
import {useHead, definePageMeta} from '#imports';

useHead({title: 'XXXX by Openmost'})
definePageMeta({
  layout: 'tools'
})

const url = 'https://demo.com'
</script>
