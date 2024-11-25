import { Component, Prop } from 'web-decorator-vue'

@Component(
  {
    name: 'hello-world',
  }
)
export default class HelloWorld {
  /**
   * Prop meg消息
   */
  @Prop() msg!: string;
}
