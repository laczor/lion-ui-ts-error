import { LionButton as OldButton } from '@lion/button';
import { LionButton as newButton } from '@lion/ui/exports/button';
import { LionButton as localLionButton } from 'local-lion-ui/exports/button';
import { LocalButton } from 'local-button';

customElements.define('old-button', OldButton);
customElements.define('new-button', newButton);
customElements.define('local-button', LocalButton);
customElements.define('local-lion-button', localLionButton);



