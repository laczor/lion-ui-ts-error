import { LionButton as LionButton } from '@lion/button';
// import { LionButton as LionUiButton } from '@lion/ui/exports/button.js';
import { LionButton as LocalLionUiButton } from 'local-lion-ui/exports/button';
import { LocalButton } from 'local-button';

customElements.define('lion-button', LionButton);
// customElements.define('lion-ui-button', LionUiButton);
customElements.define('local-lion-ui-button', LocalLionUiButton);
customElements.define('local-button', LocalButton);



