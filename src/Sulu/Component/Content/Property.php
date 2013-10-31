<?php
/*
 * This file is part of the Sulu CMS.
 *
 * (c) MASSIVE ART WebServices GmbH
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace Sulu\Component\Content;

class Property implements PropertyInterface
{
    /**
     * @var string
     */
    private $name;

    /**
     * @var bool
     */
    private $mandatory;

    /**
     * @var bool
     */
    private $multilingual;

    /**
     * @var int
     */
    private $minOccurs;

    /**
     * @var int
     */
    private $maxOccurs;

    /**
     * @var string
     */
    private $contentTypeName;

    /**
     * @var array
     */
    private $params;

    /**
     * @var mixed
     */
    private $value;

    function __construct(
        $name,
        $contentTypeName,
        $mandatory = false,
        $multilingual = false,
        $maxOccurs = 1,
        $minOccurs = 1,
        $params = array()
    ) {
        $this->contentTypeName = $contentTypeName;
        $this->mandatory = $mandatory;
        $this->maxOccurs = $maxOccurs;
        $this->minOccurs = $minOccurs;
        $this->multilingual = $multilingual;
        $this->name = $name;
        $this->params = $params;
    }

    /**
     * returns name of template
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @return bool
     */
    public function isMandatory()
    {
        return $this->mandatory;
    }

    /**
     * @return bool
     */
    public function isMultilingual()
    {
        return $this->multilingual;
    }

    /**
     * @return int
     */
    public function getMinOccurs()
    {
        return $this->minOccurs;
    }

    /**
     * @return int
     */
    public function getMaxOccurs()
    {
        return $this->maxOccurs;
    }

    /**
     * sets the value from property
     * @param mixed $value
     */
    public function setValue($value)
    {
        $this->value = $value;
    }

    /**
     * gets the value from property
     * @return mixed
     */
    public function getValue()
    {
        return $this->value;
    }

    /**
     * @return string
     */
    public function getContentTypeName()
    {
        return $this->contentTypeName;
    }

    /**
     * @return array
     */
    public function getParams()
    {
        return $this->params;
    }

    /**
     * magic getter for twig templates
     * @param $property
     * @return null
     */
    public function __get($property)
    {
        if (method_exists($this, 'get' . ucfirst($property))) {
            return $this->{'get' . ucfirst($property)}();
        } else {
            return null;
        }
    }
}
