import React from 'react';
import createReactClass from 'create-react-class';
import { mixin as formPreset } from 'focus-components/common/form';
import { translate } from 'focus-core/translation';
import EventStore from '@/stores/event';
import eventActions from '@/action/event';

export default createReactClass({
    displayName: 'EventDetailView',
    mixins: [formPreset],
    definitionPath: 'event',
    action: {
        load: eventActions.load
    },
    stores: [
        {
            store: EventStore,
            properties: ['eventDetail']
        }
    ],
    buildBooleanProps(fieldName) {
        return {
            value: this.state[fieldName] == null ? null : '' + this.state[fieldName],
            onChange: (value) => this.setState({ [fieldName]: (value === 'true' ? true : value === 'false' ? false : null) })
        }
    },

    /** @inheritDoc */
    renderContent() {
        return (
            <div data-app='live-page'>
                <h4 className='website-title'>{translate('label.recapEvent')}</h4>
                <div>
                    {this.fieldFor('name')}
                    {this.fieldFor('description')}
                    {this.fieldFor('status')}
                    {this.fieldFor('reservedToAffiliates', this.buildBooleanProps('reservedToAffiliates'))}
                    {this.fieldFor('reservedToPartners', this.buildBooleanProps('reservedToPartners'))}
                    {this.fieldFor('minimumViews')}
                    {this.fieldFor('minimumFollowers')}
                    {this.fieldFor('current', this.buildBooleanProps('current'))}
                </div>
            </div>
        );
    }
});