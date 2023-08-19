import CodersButton, { CoderButtonProps } from "../components/CodersButton";

export default{
  title: 'Vinicius/CodersButton',
  component: CodersButton
}

const Template: ComponentStory<typeof CodersButton> = (args) => <CodersButton {...args}/>

export const Primary = Template.bind({});
Primary.args = {
  label: 'cachorro'
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'macaco'
}

export const WithIcon = Template.bind({});