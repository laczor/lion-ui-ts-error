import { LionButton as OldButton } from '@lion/button';
import { LionButton as newButton } from '@lion/ui/button.js';
import { LionButton as localButton } from 'local-lion-ui';

customElements.define('old-button', OldButton);
customElements.define('new-button', newButton);
customElements.define('local-button', localButton);



