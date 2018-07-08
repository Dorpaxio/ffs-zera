import PropTypes from 'prop-types';
import React from 'react';

/**
* Small overlay component used to listen to scroll and prevent it to leave the Popin component
*/
class Overlay extends React.Component {
    static displayName = 'PopinOverlay';

    static propTypes = {
        children: PropTypes.object,
        clickHandler: PropTypes.func,
        show: PropTypes.bool
    };

    static defaultProps = { show: false };

    /**
    * Store the body overgflow property, and set it to hidden
    * @private
    */
    _hideBodyOverflow = () => {
        document.body.classList.add('overflow-y-hidden');
    };

    /**
    * Restore body overflow property
    * @private
    */
    _restoreBodyOverflow = () => {
        document.body.classList.remove('overflow-y-hidden');
    };

    componentWillMount() {
        this._hideBodyOverflow();
    }

    /**
    * Component will unmount event handler.
    * Remove the mouse wheel listener.
    */
    componentWillUnmount() {
        // ReactDOM.findDOMNode(this.refs.overlay).removeEventListener('mousewheel', this._onScroll);
        this._restoreBodyOverflow();
    }

    /**
    * Render the component
    * @return {XML} the rendered HTML
    */
    render() {
        const { children, clickHandler } = this.props;
        return (
            <div className='animated fadeIn' data-animation='fadeIn' data-closing-animation='fadeOut' data-focus='popin-overlay' data-visible onClick={clickHandler} ref='overlay'>
                {children}
            </div>
        );
    }
}

export default Overlay;