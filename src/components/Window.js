import DesktopComponent from './DesktopComponent'
import libui from 'libui-node'

class Window extends DesktopComponent {

  constructor(root, props) {
    super(root, props)
    this.root = root;
    this.props = props;
    this.element = new libui.UiWindow(props.name, props.width, props.height, props.menuBar)
    this.element.onClosing(() => {
        if (typeof this.props.onClose !== 'undefined') {
            this.props.onClose()
        }
        this.element.close()
        console.log(this.props.lastWindow)
        if (this.props.lastWindow === true || typeof this.props.lastWindow === 'undefined') {
            libui.stopLoop()
        }
    })
  }

  update(oldProps, newProps) {
    if (newProps.title !== oldProps.title) {
      this.element.title = newProps.title
    }
    if (newProps.height !== oldProps.height) {
      this.element.contentSize.h = newProps.height
    }
    if (newProps.width !== oldProps.width) {
      this.element.contentSize.w = newProps.width
    }
  }

  render() {
    this.element.show()
    this.renderChildNode(this.element);
  }
}

export default Window;