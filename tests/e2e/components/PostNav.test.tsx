import { expect, test } from '@playwright/test';
import { mount, shallow } from 'enzyme';
import PostNav from '../../../src/components/PostNav.tsx';

test.describe('PostNav_function', () => {
  // Tests that the navigation bar is rendered with the correct section name and photo
  test('test_renderNavigationBar', () => {
    const section = {
      SectionName: 'Test Section',
      SectionUrl: 'test-url',
      SectionPhoto: 'test-photo-url',
    };

    const wrapper = shallow(<PostNav section={section} />);

    expect(wrapper.find('.navbar')).toHaveLength(1);
    expect(wrapper.find('.navbar').text()).toContain('Test Section');
    expect(wrapper.find('Image').prop('src')).toEqual('test-photo-url');
  });
  // Tests that the navigation bar collapses when the collapse button is clicked
  test('test_collapse_button', () => {
    // Arrange
    const section = {
      SectionName: 'Test Section',
      SectionUrl: 'test-url',
      SectionPhoto: 'test-photo',
    };
    const wrapper = shallow(<PostNav section={section} />);
    const collapseButton = wrapper.find('button').at(0);

    // Act
    collapseButton.simulate('click');

    // Assert
    expect(wrapper.find('.navbar').hasClass('collapsed')).toBe(true);
  });
  // Tests that clicking on the share button triggers the share functionality
  test('test_shareButton', () => {
    // Mock the necessary functions or components
    const mockShareFunction = jest.fn();
    const mockImageComponent = jest.fn();
    jest.mock('next/image', () => ({
      __esModule: true,
      default: mockImageComponent,
    }));

    // Render the component
    const wrapper = shallow(
      <PostNav section={{ SectionName: 'Section 1', SectionUrl: 'section1', SectionPhoto: 'photo1' }} />
    );

    // Simulate the click event
    wrapper.find('.btn-warning').simulate('click');

    // Assert that the share function is called
    expect(mockShareFunction).toHaveBeenCalled();
  });
  // Tests that clicking on the more options button shows more options
  test('test_clickMoreOptionsButton', () => {
    const wrapper = mount(
      <PostNav section={{ SectionName: 'Section 1', SectionUrl: '/section1', SectionPhoto: '/section1.jpg' }} />
    );
    expect(wrapper.find('.dropdown-content').exists()).toBe(false);

    wrapper.find('.btn-ghost').simulate('click');
    expect(wrapper.find('.dropdown-content').exists()).toBe(true);
  });
  // Tests that the navigation bar closes when the close button is clicked
  test('test_closeButton', () => {
    // Arrange
    const section = {
      SectionName: 'Test Section',
      SectionUrl: 'test-url',
      SectionPhoto: 'test-photo',
    };
    const wrapper = shallow(<PostNav section={section} />);

    // Act
    wrapper.find('.ml-4.h-10.w-10').simulate('click');

    // Assert
    expect(wrapper.find('.navbar')).toHaveLength(0);
  });
  // Tests that the function handles an empty section name correctly
  test('test_section_name_empty', () => {
    const section = {
      SectionName: '',
      SectionUrl: 'example.com',
      SectionPhoto: 'example.jpg',
    };

    const wrapper = shallow(<PostNav section={section} />);

    const sectionName = wrapper.find('.btn-sm').text();

    expect(sectionName).toBe('');
  });
  // Tests that the section photo is not displayed when it is empty
  test('test_section_photo_empty', () => {
    const section = {
      SectionName: 'Section 1',
      SectionUrl: 'section1',
      SectionPhoto: '',
    };

    const wrapper = shallow(<PostNav section={section} />);

    expect(wrapper.find('Image').exists()).toBe(false);
  });
  // Tests that the section URL is empty
  test('test_section_url_empty', () => {
    const section = {
      SectionName: 'Section 1',
      SectionUrl: '',
      SectionPhoto: 'photo.jpg',
    };

    const wrapper = shallow(<PostNav section={section} />);

    const button = wrapper.find('.btn-sm');

    expect(button.prop('href')).toBe('#');
  });
});
