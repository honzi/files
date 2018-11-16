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
     * Get value of property tied to $key.
     */
    public function __get($key){
        return $this->properties[$key];
    }

    /**
     * Allow calling Page objects to return render content.
     */
    public function __invoke(){
        return $this->render();
    }

    /**
     * Return if property tied to $key is set.
     */
    public function __isset($key){
        return isset($this->properties[$key]);
    }

    /**
     * Return the contents of the template with Page variables.
     */
    public function render(){
        if(file_exists($this->properties['template'])){
            extract($this->properties);
            chdir(dirname($this->properties['template']));

            ob_start();
            include basename($this->properties['template']);

            return ob_get_clean();

        }else{
            return $this->properties['template'] . ' does not exist!';
        }
    }

    /**
     * Set $value of property tied to $key.
     * Creates the property if it does not yet exist.
     */
    public function __set($key, $value = null){
        $this->properties[$key] = $value;
    }

    /**
     * When Page is echod or printed, render to text.
     */
    public function __toString(){
        return $this->render();
    }

    /**
     * Unset Page property tied to $key.
     */
    public function __unset($key){
        unset($this->properties[$key]);
    }

}
