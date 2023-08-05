import { EnzymeAdapter, configure, shallow } from 'enzyme';
import { expect, test } from '@playwright/test';
import PostBody from '../../../src/components/PostBody.tsx';

configure({ adapter: new EnzymeAdapter() });

test.describe('PostBody_function', () => {
  test('test_render_post_body_with_valid_content', () => {
    const content = '<p>Hello, world!</p>';
    const wrapper = shallow(<PostBody content={content} />);
    expect(wrapper.find('.ml-3.mr-3.mt-10')).toHaveLength(1);
    expect(wrapper.html()).toContain(content);
  });

  test('test_return_sanitized_html', () => {
    const content = '<script>alert("Hello")</script>';
    const wrapper = shallow(<PostBody content={content} />);
    expect(wrapper.find('div.ml-3.mr-3.mt-10').html()).toEqual(
      '<div class="ml-3 mr-3 mt-10">&lt;script&gt;alert("Hello")&lt;/script&gt;</div>'
    );
  });

  test('test_handle_special_characters_and_html_entities', () => {
    const content = '&lt;div&gt;Hello, &amp;#123;world&amp;#125;!&lt;/div&gt;';
    const wrapper = shallow(<PostBody content={content} />);
    expect(wrapper.html()).toEqual(
      '<div class="ml-3 mr-3 mt-10">&lt;div&gt;Hello, &#123;world&#125;!&lt;/div&gt;</div>'
    );
  });

  test('test_return_null_if_content_prop_is_falsy', () => {
    const wrapper = shallow(<PostBody content={null} />);
    expect(wrapper.type()).toBeNull();
  });

  test('test_throw_error_if_content_undefined', () => {
    expect(() => {
      PostBody({ content: undefined });
    }).toThrow('Content cannot be undefined');
  });

  test('renders sanitized html with correct class names', () => {
    const content = '<p>Test content</p>';
    const wrapper = shallow(<PostBody content={content} />);
    expect(wrapper.find('.ml-3.mr-3.mt-10').html()).toEqual('<div class="ml-3 mr-3 mt-10"><p>Test content</p></div>');
  });
});
