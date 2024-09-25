import IndexPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'
import IndexPage from '@/components/IndexPage.vue'


describe('IndexPage', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('Bangdungstn')
  });

  it('ตรวจสอบตัวแปรชื่อว่าtitle', () => {
    const wrapper = shallowMount(IndexPage, {
      data () {
        return {
          title: 'I love Vue.'
        }
      }
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('I love Vue.')
  })
})
test('ทดสอบว่ามี ฟอร์ม (form)', () => {
  const wrapper = shallowMount(IndexPage)
  expect(wrapper.find('form').exists()).toBe(true)
})

test('ทดสอบว่าใน ฟอร์ม(form) มีการรับค่า (input)', () => {
  const wrapper = shallowMount(IndexPage)
  expect(wrapper.find('form > input').exists()).toBe(true)
})

test('ทดสอบว่ามีปุ่ม (button)', () => {
  const wrapper = shallowMount(IndexPage)
  expect(wrapper.find('button').exists()).toBe(true)
})

test('ทดสอบว่ามีรหัส (firstName) ในฟอร์ม', () => {
  const wrapper = shallowMount(IndexPage)
  expect(wrapper.find('firstName').exists()).toBe(true)
})


test('ทดสอบว่ามีรหัส (surName) ในฟอร์ม', () => {
  const wrapper = shallowMount(IndexPage)
  expect(wrapper.find('surname').exists()).toBe(true)
})

test('ทดสอบว่ามีรหัส (nickName) ในฟอร์ม', () => {
  const wrapper = shallowMount(IndexPage)
  expect(wrapper.find('nickName').exists()).toBe(true)
})

test('ทดสอบว่ามีรหัส (Student Code) ในฟอร์ม', () => {
  const wrapper = shallowMount(IndexPage)
  expect(wrapper.find('studentcode').exists()).toBe(true)
})