<?php

class Page{

    protected $properties = array(
      'template' => '',
    );

    /**
     * Construct new Page object with a $template.
     */
    public function __construct($template){
        $this->properties['template'] = $template;
    }

    /**
     * Set $value of property tied to $key.
     * Creates the property if it does not yet exist.
     */
    public function __set($key, $value){
        $this->properties[$key] = $value;
    }

    /**
     * When Page is echod or printed, render to text.
     */
    public function __toString(){
        extract($this->properties);

        ob_start();
        include $this->properties['template'];

        return ob_get_clean();
    }

}
